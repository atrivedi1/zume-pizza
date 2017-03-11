var info = { step: 'start', available: false };

function checkAndUpdateStep(status) {
     switch(status.step) {
        case 'start':
            status.step = 'available';
            status.available = false;
            break;

        case 'unavailable':
            status.step = 'available';
            status.available = true;
            break;

        case 'available':
            status.step = 'alldone';
            status.available = false;
            break;

        case 'alldone':
            status.step = 'unavailable';
            status.available = false;
            break;

        default:
            throw new Error('unknown step');
    }

    return status;
}

function doImportantThing() {
    console.log("doing something important!");
}

function actOnCurrentState() {
    console.log("acting on new state");
}

function stateLoop(info) {
     if (info.available) {
           // this is important!
           doImportantThing();
     }
     
     var updatedStatus = checkAndUpdateStep(info);
     actOnCurrentState(updatedStatus);
}

setInterval(function(){
    stateLoop(info);
},500);

//ran out of time but would clear interval after a certain period