class User:
    def __init__(self, id=None, userName=None, email=None, password=None,cellphone=None,active=None,userType=None):
        self.id = id
        self.userName = userName
        self.email = email
        self.password = password
        self.cellphone = cellphone
        self.active = active
        self.userType = userType