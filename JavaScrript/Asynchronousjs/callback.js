const showMessage = (callback) =>{
    console.log(callback);
};

const firstMessage = (callback)=>{
    setInterval(() =>{
        showMessage("Hello");
        callback();
        }, 2000);
};

const secondMessage = () =>{
    showMessage("Divyansh!");
};

firstMessage(secondMessage);
