const { MongoClient, Collection } = require('mongodb');
require('dotenv').config({path: './config.env'});

async function main() {
  // TO DO add mongoose stuff??/

    const Db = process.env.Atlas_URI;
    const client = new MongoClient(Db);

    try{
        await client.connect();

        const collections = await client.db("sample_mflix").collections();
        collections.forEach((Collection) => console.log(Collection.s.namespace.collection));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main()