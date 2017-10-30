
class model.Node {
    rel left : model.Node
    rel right : model.Node
    att cypher : String
    att plain : String
}

class model.Tree {
    rel nodeList : model.Node

}

class model.DbManager {
    rel clients : model.Client
}

class model.Client {
    att name : String
    rel dbManager : model.DbManager
}

class model.IQueryStrategy {
}

class model.Query {
    rel queryStrategy : model.IQueryStrategy
}