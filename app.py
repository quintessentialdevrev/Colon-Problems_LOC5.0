import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS
import random
import difflib
import json
import cv2
import imutils
import urllib.request
app = Flask(__name__)
CORS(app)

model = pickle.load(open('backend\model1.pkl', 'rb'))
df = pd.read_excel('backend\photography.xlsx')
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def home():
    return "<h1>Server is live</h1>"

@app.route('/predict',methods=['POST'])
#@crossdomain(origin='*')
def predict():
    print('hello')
    try:
        request_data = request.get_json()
        print(request_data)
    except Exception as er:
        print("error")
        print(er)
    print("data: ", request_data)
    close_match =  difflib.get_close_matches(request_data['quote'], df['Genre'].tolist())
    # print(close_match)
    close = close_match[0]
    print(close)
    id_of_quote = df[df['Genre'] == close]['index'].values[0]
    print(id_of_quote)
    similarity_score = list(enumerate(model[id_of_quote])) 
    print("hello")
    sorted_sim_quote = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    return_list = []
    i = 1
    for k in sorted_sim_quote:
        if(i == 0):
            i +=1
            continue
        id = k[0]
        try:
            quote_from_id = df[df['index'] == int(id)]['Name'].values[0]
            print(quote_from_id)
            if(i == 6):
                break
            i += 1
            return_list.append(quote_from_id)
        except:
            pass
        # except:
        #     pass
    print(return_list)
    print("jsonify")
    #print(jsonify(return_list))

    return jsonify(return_list)
    #return json.dumps(return_list)

@app.route('/predictSimilarity',methods=['POST'])
#@crossdomain(origin='*')
def predictSimilarity():
    print('hello')
    try:
        request_data = request.get_json()
        print(request_data)
    except Exception as er:
        print("error")
        print(er)
    print("data: ", request_data)
    
    req = urllib.request.urlopen(request_data["img1"])
    arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
    original = cv2.imdecode(arr, -1)

    req = urllib.request.urlopen(request_data["img2"])
    arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
    new = cv2.imdecode(arr, -1)

    # original = cv2.imread(request_data["img1"])
    # new = cv2.imread(request_data["img2"])
    # print(original)
    # cv2.imshow("window_name", original)
    # cv2.waitKey(0)
    #resize the images to make them small in size. A bigger size image may take a significant time
    #more computing power and time
    original = imutils.resize(original, height = 600)
    new = imutils.resize(new, height = 600)

    z3 = sum(sum(cv2.absdiff(original, new)).flatten())

    print("jsonify")
    #print(jsonify(return_list))

    print(z3)

    return {"data": str(z3)}
    #return json.dumps(return_list)

if __name__ == "__main__":
    app.run(debug = True)