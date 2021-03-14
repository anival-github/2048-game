import { Collection, MongoClient } from 'mongodb'

const url = 'mongodb+srv://anival:Dfktynby94@2048.glg8m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const dbName = '2048'
const collectionName = 'gamestatus'

const getMongoInstance = async () => {
    const client = await MongoClient.connect(url)

    return client.db(dbName)
}

const getCollection = async (): Promise<Collection> => {
    const db = await getMongoInstance()

    return db.collection(collectionName)
}

const listAll = async () => {
    const collection = await getCollection()
    return collection.find({}).toArray()
}

const create = async (item) => {
    const collection = await getCollection();

    const response = await collection.insertOne(item);

    return response.ops[0];
}

const remove = async (p: {}) => {
    const collection = await getCollection()

    return await collection.deleteMany({})
}

export {
    listAll,
    create,
    remove,
}
