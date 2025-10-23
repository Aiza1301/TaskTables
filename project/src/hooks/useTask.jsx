import axios from "axios";
import { useEffect, useState } from "react";

const useTasks = () => { 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://kep.uz/api/problems`);
      setData(res.data.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading }; 
};

export default  useTasks;
