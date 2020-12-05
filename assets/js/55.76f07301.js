(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{405:function(n,s,a){"use strict";a.r(s);var e=a(42),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"xtrabackup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xtrabackup"}},[n._v("#")]),n._v(" xtrabackup")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('#!/bin/sh\n# add ling\n## https://cloud.tencent.com/developer/article/1441289\n\n###### 全量备份的脚本\n\nINNOBACKUPEX=innobackupex\nINNOBACKUPEXFULL=/usr/bin/$INNOBACKUPEX\nTODAY=`date +%Y%m%d%H%M`\nYESTERDAY=`date -d"yesterday" +%Y%m%d%H%M`\nUSEROPTIONS="--user=user --password=123456"\nTMPFILE="/logs/mysql/innobackup_$TODAY.$$.tmp"\nMYCNF=/etc/my.cnf\nMYSQL=/usr/local/mariadb/bin/mysql\nMYSQLADMIN=/usr/local/mariadb/bin/mysqladmin\nBACKUPDIR=/backup/mysql # 备份的主目录\nFULLBACKUPDIR=$BACKUPDIR/full # 全库备份的目录\nINCRBACKUPDIR=$BACKUPDIR/incr # 增量备份的目录\nKEEP=1 # 保留几个全库备份\n \n# Grab start time\n#############################################################################\n# Display error message and exit\n#############################################################################\nerror()\n{\n    echo "$1" 1>&2\n    exit 1\n}\n \n# Check options before proceeding\nif [ ! -x $INNOBACKUPEXFULL ]; then\n  error "$INNOBACKUPEXFULL does not exist."\nfi\n \nif [ ! -d $BACKUPDIR ]; then\n  error "Backup destination folder: $BACKUPDIR does not exist."\nfi\n \nif [ -z "`$MYSQLADMIN $USEROPTIONS status | grep \'Uptime\'`" ] ; then\n error "HALTED: MySQL does not appear to be running."\nfi\n \nif ! `echo \'exit\' | $MYSQL -s $USEROPTIONS` ; then\n error "HALTED: Supplied mysql username or password appears to be incorrect (not copied here for security, see script)."\nfi\n \n# Some info output\necho "----------------------------"\necho\necho "$0: MySQL backup script"\necho "started: `date`"\necho\n \n# Create full and incr backup directories if they not exist.\nfor i in $FULLBACKUPDIR $INCRBACKUPDIR\ndo\n        if [ ! -d $i ]; then\n                mkdir -pv $i\n        fi\ndone\n \n# 压缩上传前一天的备份\necho "压缩前一天的备份，scp到远程主机"\ncd $BACKUPDIR\ntar -zcvf $YESTERDAY.tar.gz ./full/ ./incr/\nscp -P 8022 $YESTERDAY.tar.gz root@192.168.10.46:/data/backup/mysql/\nif [ $? = 0 ]; then\n  rm -rf $BACKUPDIR/full $BACKUPDIR/incr\n  echo "Running new full backup."\n  innobackupex --defaults-file=$MYCNF $USEROPTIONS $FULLBACKUPDIR > $TMPFILE 2>&1\nelse\n  echo "Error with scp."\nfi\n \nif [ -z "`tail -1 $TMPFILE | grep \'completed OK!\'`" ] ; then\n echo "$INNOBACKUPEX failed:"; echo\n echo "---------- ERROR OUTPUT from $INNOBACKUPEX ----------"\n# cat $TMPFILE\n# rm -f $TMPFILE\n exit 1\nfi\n\n# 这里获取这次备份的目录 \nTHISBACKUP=`awk -- "/Backup created in directory/ { split( \\\\\\$0, p, \\"\'\\" ) ; print p[2] }" $TMPFILE`\necho "THISBACKUP=$THISBACKUP"\n#rm -f $TMPFILE\necho "Databases backed up successfully to: $THISBACKUP"\n\n# Cleanup\necho "delete tar files of 3 days ago"\nfind $BACKUPDIR/ -mtime +3 -name "*.tar.gz"  -exec rm -rf {} \\;\n \necho\necho "completed: `date`"\nexit 0\n\n\n\n#!/bin/sh\n# add ling\n\n###### 增量备份的脚本\n\nINNOBACKUPEX=innobackupex\nINNOBACKUPEXFULL=/usr/bin/$INNOBACKUPEX\nTODAY=`date +%Y%m%d%H%M`\nUSEROPTIONS="--user=user --password=123456"\nTMPFILE="/logs/mysql/incr_$TODAY.$$.tmp"\nMYCNF=/etc/my.cnf\nMYSQL=/usr/local/mariadb/bin/mysql\nMYSQLADMIN=/usr/local/mariadb/bin/mysqladmin\nBACKUPDIR=/backup/mysql # 备份的主目录\nFULLBACKUPDIR=$BACKUPDIR/full # 全库备份的目录\nINCRBACKUPDIR=$BACKUPDIR/incr # 增量备份的目录\n\n#############################################################################\n# Display error message and exit\n#############################################################################\nerror()\n{\n    echo "$1" 1>&2\n    exit 1\n}\n \n# Check options before proceeding\nif [ ! -x $INNOBACKUPEXFULL ]; then\n  error "$INNOBACKUPEXFULL does not exist."\nfi\n \nif [ ! -d $BACKUPDIR ]; then\n  error "Backup destination folder: $BACKUPDIR does not exist."\nfi\n \nif [ -z "`$MYSQLADMIN $USEROPTIONS status | grep \'Uptime\'`" ] ; then\n error "HALTED: MySQL does not appear to be running."\nfi\n \nif ! `echo \'exit\' | $MYSQL -s $USEROPTIONS` ; then\n error "HALTED: Supplied mysql username or password appears to be incorrect (not copied here for security, see script)."\nfi\n \n# Some info output\necho "----------------------------"\necho\necho "$0: MySQL backup script"\necho "started: `date`"\necho\n \n# Create full and incr backup directories if they not exist.\nfor i in $FULLBACKUPDIR $INCRBACKUPDIR\ndo\n        if [ ! -d $i ]; then\n                mkdir -pv $i\n        fi\ndone\n \n# Find latest full backup\nLATEST_FULL=`find $FULLBACKUPDIR -mindepth 1 -maxdepth 1 -type d -printf "%P\\n"`\necho "LATEST_FULL=$LATEST_FULL" \n\n# Run an incremental backup if latest full is still valid.\n# Create incremental backups dir if not exists.\nTMPINCRDIR=$INCRBACKUPDIR/$LATEST_FULL\nmkdir -p $TMPINCRDIR\nBACKTYPE="incr"\n# Find latest incremental backup.\nLATEST_INCR=`find $TMPINCRDIR -mindepth 1 -maxdepth 1 -type d | sort -nr | head -1`\necho "LATEST_INCR=$LATEST_INCR"\n  # If this is the first incremental, use the full as base. Otherwise, use the latest incremental as base.\nif [ ! $LATEST_INCR ] ; then\n  INCRBASEDIR=$FULLBACKUPDIR/$LATEST_FULL\nelse\n  INCRBASEDIR=$LATEST_INCR\nfi\necho "Running new incremental backup using $INCRBASEDIR as base."\ninnobackupex --defaults-file=$MYCNF $USEROPTIONS --incremental $TMPINCRDIR --incremental-basedir $INCRBASEDIR > $TMPFILE 2>&1\n\n \nif [ -z "`tail -1 $TMPFILE | grep \'completed OK!\'`" ] ; then\n echo "$INNOBACKUPEX failed:"; echo\n echo "---------- ERROR OUTPUT from $INNOBACKUPEX ----------"\n exit 1\nfi\n\n# 这里获取这次备份的目录 \nTHISBACKUP=`awk -- "/Backup created in directory/ { split( \\\\\\$0, p, \\"\'\\" ) ; print p[2] }" $TMPFILE`\necho "THISBACKUP=$THISBACKUP"\necho\necho "Databases backed up successfully to: $THISBACKUP"\n\necho\necho "incremental completed: `date`"\nexit 0\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br"),a("span",{staticClass:"line-number"},[n._v("131")]),a("br"),a("span",{staticClass:"line-number"},[n._v("132")]),a("br"),a("span",{staticClass:"line-number"},[n._v("133")]),a("br"),a("span",{staticClass:"line-number"},[n._v("134")]),a("br"),a("span",{staticClass:"line-number"},[n._v("135")]),a("br"),a("span",{staticClass:"line-number"},[n._v("136")]),a("br"),a("span",{staticClass:"line-number"},[n._v("137")]),a("br"),a("span",{staticClass:"line-number"},[n._v("138")]),a("br"),a("span",{staticClass:"line-number"},[n._v("139")]),a("br"),a("span",{staticClass:"line-number"},[n._v("140")]),a("br"),a("span",{staticClass:"line-number"},[n._v("141")]),a("br"),a("span",{staticClass:"line-number"},[n._v("142")]),a("br"),a("span",{staticClass:"line-number"},[n._v("143")]),a("br"),a("span",{staticClass:"line-number"},[n._v("144")]),a("br"),a("span",{staticClass:"line-number"},[n._v("145")]),a("br"),a("span",{staticClass:"line-number"},[n._v("146")]),a("br"),a("span",{staticClass:"line-number"},[n._v("147")]),a("br"),a("span",{staticClass:"line-number"},[n._v("148")]),a("br"),a("span",{staticClass:"line-number"},[n._v("149")]),a("br"),a("span",{staticClass:"line-number"},[n._v("150")]),a("br"),a("span",{staticClass:"line-number"},[n._v("151")]),a("br"),a("span",{staticClass:"line-number"},[n._v("152")]),a("br"),a("span",{staticClass:"line-number"},[n._v("153")]),a("br"),a("span",{staticClass:"line-number"},[n._v("154")]),a("br"),a("span",{staticClass:"line-number"},[n._v("155")]),a("br"),a("span",{staticClass:"line-number"},[n._v("156")]),a("br"),a("span",{staticClass:"line-number"},[n._v("157")]),a("br"),a("span",{staticClass:"line-number"},[n._v("158")]),a("br"),a("span",{staticClass:"line-number"},[n._v("159")]),a("br"),a("span",{staticClass:"line-number"},[n._v("160")]),a("br"),a("span",{staticClass:"line-number"},[n._v("161")]),a("br"),a("span",{staticClass:"line-number"},[n._v("162")]),a("br"),a("span",{staticClass:"line-number"},[n._v("163")]),a("br"),a("span",{staticClass:"line-number"},[n._v("164")]),a("br"),a("span",{staticClass:"line-number"},[n._v("165")]),a("br"),a("span",{staticClass:"line-number"},[n._v("166")]),a("br"),a("span",{staticClass:"line-number"},[n._v("167")]),a("br"),a("span",{staticClass:"line-number"},[n._v("168")]),a("br"),a("span",{staticClass:"line-number"},[n._v("169")]),a("br"),a("span",{staticClass:"line-number"},[n._v("170")]),a("br"),a("span",{staticClass:"line-number"},[n._v("171")]),a("br"),a("span",{staticClass:"line-number"},[n._v("172")]),a("br"),a("span",{staticClass:"line-number"},[n._v("173")]),a("br"),a("span",{staticClass:"line-number"},[n._v("174")]),a("br"),a("span",{staticClass:"line-number"},[n._v("175")]),a("br"),a("span",{staticClass:"line-number"},[n._v("176")]),a("br"),a("span",{staticClass:"line-number"},[n._v("177")]),a("br"),a("span",{staticClass:"line-number"},[n._v("178")]),a("br"),a("span",{staticClass:"line-number"},[n._v("179")]),a("br"),a("span",{staticClass:"line-number"},[n._v("180")]),a("br"),a("span",{staticClass:"line-number"},[n._v("181")]),a("br"),a("span",{staticClass:"line-number"},[n._v("182")]),a("br"),a("span",{staticClass:"line-number"},[n._v("183")]),a("br"),a("span",{staticClass:"line-number"},[n._v("184")]),a("br"),a("span",{staticClass:"line-number"},[n._v("185")]),a("br"),a("span",{staticClass:"line-number"},[n._v("186")]),a("br"),a("span",{staticClass:"line-number"},[n._v("187")]),a("br"),a("span",{staticClass:"line-number"},[n._v("188")]),a("br"),a("span",{staticClass:"line-number"},[n._v("189")]),a("br"),a("span",{staticClass:"line-number"},[n._v("190")]),a("br"),a("span",{staticClass:"line-number"},[n._v("191")]),a("br"),a("span",{staticClass:"line-number"},[n._v("192")]),a("br"),a("span",{staticClass:"line-number"},[n._v("193")]),a("br"),a("span",{staticClass:"line-number"},[n._v("194")]),a("br"),a("span",{staticClass:"line-number"},[n._v("195")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);