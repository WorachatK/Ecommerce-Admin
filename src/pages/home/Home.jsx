import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import './home.css'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { userRequest } from '../../requestMethod'

const Home = () => {
  const [ userStats,setUserStats ] = useState([])
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className='home'>
        <FeatureInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
        </div>
    </div>
  )
}

export default Home