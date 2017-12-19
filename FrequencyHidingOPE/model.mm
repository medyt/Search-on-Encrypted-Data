class model.Node {
   rel left : model.Node
   rel right : model.Node
   att cypher : String
   att plain : String
}

class model.BinarySearchTree {
    rel root: model.Node
}

class model.Customer {
    att username : String
    att email : String
    att balance : String
    att cardnumber : String
    att password : String
}

