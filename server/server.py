#.\env\Scripts\activate
#python .\server.py    
#python -m pip install mysql-connector-python
from flask import Flask, jsonify, request
import mysql.connector
from mysql.connector import Error
from mainController import *
from model.Brand import *

app = Flask(__name__)
connection = mysql.connector.connect(user='root', password='12345',host='localhost',database='mydb',port='3306')
cursor = connection.cursor()

#Brand
@app.route("/brand",methods=['POST'])
def createBrand():
    data = request.get_json()
    name = data['name']
    brand = Brand(name=name, active=1)
    result = mainController.createBrand(brand,connection,cursor)
    return jsonify({
        'Result': result
    })

def readBrand():
    result = mainController.readBrand(connection,cursor)
    return jsonify({
        'Result': result
    })



if __name__ == "__main__":
    app.run(debug=True)