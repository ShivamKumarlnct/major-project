class Expresserror extends error{
    constructor(status,message){
            super();
            this.status=status;
            this.message=message;
    }
}
module.exports=Expresserror;