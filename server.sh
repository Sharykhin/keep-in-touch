#!/bin/bash



start() {
	cd application
	gulp dev &
	cd ../server
	bee run &	
	
}

stop() {
	echo "Stopping server..."
	kill -9 `ps -ef | grep "gulp" | grep -v "grep" | awk '{print $2}'`
	kill -9 `ps -ef | grep "./server" | grep -v "grep" | awk '{print $2}'`
	echo "Server has been stopped"	
}

restart() {	
	stop
	start		
}

case "$1" in
start)
	start
	;;
stop)
	stop
	;;
restart)
	restart
	;;
*)
 
echo "Usage: {start|stop|restart}"
	exit 1
esac
