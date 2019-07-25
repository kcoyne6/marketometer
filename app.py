import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

################################
#### Connection to Database ####
################################

# Create our session (link) from Python to the DB
engine = create_engine("sqlite:///db/final_stock_data.sqlite")

session = Session(engine)
# reflect an existing database into a new model
Base = declarative_base()

#Declare the bases because automap doesn't work
class Stocks(Base):
    __tablename__ = "final_stock_data"
    Stock = Column(String, primary_key=True)
    Ticker = Column(String)
    Date = Column(String)
    Open = Column(Float)
    High = Column(Float)
    Low = Column(Float)
    Close = Column(Float)
    Adj_Close = Column(Float)
    Volume = Column(Integer)
 
app = Flask(__name__)

@app.route('/api')
def api():
    return render_template('Api.html')

@app.route('/api/stock_stats')
def stock_data():
    engine = create_engine("sqlite:///db/final_stock_data.sqlite")

    session = Session(engine)
    
    results = session.query(Stocks.Stock, Stocks.Ticker, Stocks.Date, Stocks.Open, Stocks.High, Stocks.Low, Stocks.Close, Stocks.Adj_Close, Stocks.Volume).all()
    stock_stats = []
    for result in results:
        stock_dict = {}
        stock_dict['stock'] = result.Stock
        stock_dict['ticker'] = result.Ticker
        stock_dict['date'] = result.Date
        stock_dict['open'] = result.Open
        stock_dict['high'] = result.High
        stock_dict['low'] = result.Low
        stock_dict['close'] = result.Close
        stock_dict['adj_close'] = result.Adj_Close
        stock_dict['volume'] = result.Volume
        stock_stats.append(stock_dict)
        
    return jsonify(stock_stats)



@app.route('/twitter_influencers')
def twitter_impact():
    return render_template('Twitter.html')

@app.route('/stocks')
def stocks_page():    
    return render_template('Stocks.html')

@app.route('/analysis')
def analysis():
    return render_template('Analysis.html')

# @app.route('/data')
# def data_resources():
#     return render_template('data.html')

@app.route('/')
def home():
    return render_template('index.html')
    

if __name__ == "__main__":
    app.run(debug=True)