var status;

function start(){
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		cm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;



	if(status == 0){
		cm.sendGetText("A suspicious voice pierces through the silence. #bPassword#k!");
	}
	else if(status == 1){
		if(cm.getText() == "Francis is a genius Puppeteer!"){
			if(cm.isQuestStarted(20730) && cm.getQuestProgress(20730, 9300285) == 0)
				cm.warp(910510001, 1);
			else
                                cm.playerMessage(5, "Although you said the right answer, some mysterious forces is blocking the way in.");

			cm.dispose();
		}
		else{
			cm.sendOk("#rWrong!");
		}
	}
	else if(status == 2){
		cm.dispose();
	}
}