import React from 'react';
import { connect } from 'react-redux';;
import { fetchNews, changePage } from '../../actions';
import LineChart from 'react-linechart';
const Chart = ({updateList}) => {
    let dataList = [];
    updateList.forEach((item)=>{
        if(item.votes && !(item.hide)) {
            dataList.push({x:item.objectID.substring(0,3), y: item.votes})
        }
    })
    const data = [
        {							
            color: "steelblue", 
            points: dataList 
        }
    ];
    return (
        <div>
                <div className="App">
                    <h1>Votes Update chart</h1>
                    <LineChart 
                        yLabel= 'Votes'
                        xLabel= 'ID(First four digit of ID)'
                        yMax = '50'
                        xMax = '1000'
                        xMin = '0'
                        width={1000}
                        height={400}
                        data={data}
                    />
                </div>				
            </div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    fetchNews:(page) => dispatch(fetchNews(page)),
    updatePage:(page)=>dispatch(changePage(page))
  })
const mapStateToProps= (state) => ({
    updateList: state.news.updateList
  })
export default connect(mapStateToProps, mapDispatchToProps)(Chart);