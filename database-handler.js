class Handler{
    constructor(dbName,client){
        this.dataBaseName = dbName;
        this.client = client;
    }
    async addEntry(collection,entryDoc){
        let done;
        let msg;
        try{
        await this.client.connect();
        console.log("connected to database server");
        let database = await this.client.db(this.dataBaseName);
        let col = await database.collection(collection);
        let res = await col.insertOne(entryDoc);
        done = res;
        msg = "operation complete";
        }
        catch(err){
            msg = "an error occured";
            console.log("an error occured while adding entry");
            throw err;
        }
        finally{
            await this.client.close();
            console.log(msg,"disconnected from database server");
        }
        return done.result;
    }
    async update(collection,query,doc){
        let done;
        let msg;
        try{
        await this.client.connect();
        console.log("connected to database server");
        let database = await this.client.db(this.dataBaseName);
        let col = await database.collection(collection);
        let updated = await col.updateOne(query,doc);
        done = updated;
        msg = "operation complete";
        }
        catch(err){
            msg = "an error occured";
            throw err;
        }
        finally{
            await this.client.close();
            console.log(msg,"disconnected from database server");
        }
        return done;
    }
    async read(collection,query){
        let done;
        let msg;
        try{
        await this.client.connect();
        console.log("connected to database server");
        let database = await this.client.db(this.dataBaseName);
        let col = await database.collection(collection);    
        if(!query){
            let data = await col.find();
            done = [];
            await data.forEach(doc => done.push(doc));

            
            msg = "operation complete";
        }
        else{
            let data = await col.findOne(query);
            done = data;
            msg = "operation complete";
        }
        }
        catch(err){
            msg = "an error occured";
            console.log("an error occured while reading from db");
            throw err;
        }
        finally{
            await this.client.close();
            console.log(msg,"disconnected from database server");
        }
        return done;
    }
}
module.exports = Handler;
