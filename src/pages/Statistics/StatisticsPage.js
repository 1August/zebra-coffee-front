import './StatisticsPage.scss'

import {Line, Pie} from "react-chartjs-2";
import {VictoryBar} from 'victory-bar';
import {VictoryLine} from 'victory-line'
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getStatData} from "../../redux/asyncActions/statActions";
import {useEffect} from "react";
import {VictoryChart, VictoryTheme} from "victory";

export const StatisticsPage = () => {
    const dispatch = useDispatch()
    const {statCategory, data} = useSelector(state => state.stat)

    const {statId} = useParams()

    const handleStatStatCategoryChange = e => {
        dispatch(getStatData(statId))
    }


    return (
        <div className="statisticsPage" id="statisticsPage">
            <div className="container">
                <h1>Statistics</h1>
                <div className="statMain">
                    <div className="statLeft">
                        <div className="statCategories">
                            <ul>
                                <li>
                                    <NavLink to={'/statistics/stat1'}
                                             onClick={handleStatStatCategoryChange}
                                        // className={(isActive) => isActive ? 'activeStat' : ''}
                                    >
                                        Lorem ipsum dolor sit amet.
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/statistics/stat2'}
                                             onClick={handleStatStatCategoryChange}
                                        // className={(isActive) => isActive ? 'activeStat' : ''}
                                    >
                                        Architecto facere fugit nemo similique?
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/statistics/stat3'}
                                             onClick={handleStatStatCategoryChange}
                                        // className={(isActive) => isActive ? 'activeStat' : ''}
                                    >
                                        Aperiam cupiditate eius nobis nulla!
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="statRight">
                        <div className="statGraph">
                            <div className="statGraphHead">
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, fuga.</h1>
                            </div>
                            <div className="statGraphImg">
                                <VictoryChart
                                    theme={VictoryTheme.material}
                                >
                                    <VictoryLine
                                        animate={{
                                            duration: 2000,
                                            onLoad: {duration: 1000}
                                        }}
                                        data={data}
                                        label={'This is a label'}
                                        interpolation={'linear'}
                                    />
                                </VictoryChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}