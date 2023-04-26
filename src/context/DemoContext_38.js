import React, { useContext, useReducer, useEffect } from "react";
import DemoReducer_38 from "./DemoReducer_38";
import { supabase } from "../db/clientSupabase";
import blogsData from "../data/BlogData2_38";
import axios from "axios";

let api_url = `https://one112-server-card-demo-38.onrender.com/api/card2_38`;

let api_midterm_url = `http://localhost:5050/api/mid_38/menu_38`;

let api_midprep_url = `http://localhost:5050/api/midp_38/overview2_xx`;

const initialState = {
  pName: "LICHUN LIN",
  pid: "208417138",
  blogs: [],
  blogs2:[],
  data1: [],
  data2: [],
  menu: []
};

const DemoContext_38 = React.createContext();

const DemoProvider_38 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_38, initialState);

  const fetchProductDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_midprep_url);
      console.log('product data', results.data);
      dispatch({ type: 'GET_PRODUCTS_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchProductDataFromNodeServer();
  }, []);

  const fetchBlogDataFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from(`card_38`).select("*");
      // console.log("results", data);
      dispatch({ type: "GET_BLOGS_SUPABASE_SUCCESS", payload: data });
      //   setData(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);

  const fetchBlogDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      console.log("results", results.data);
      dispatch({ type: "GET_BLOGS_NODE_SUCCESS", payload: results.data });
      //setData(results.data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchBlogDataFromNodeServer();
  }, []);


  return (
    <DemoContext_38.Provider value={{ ...state }}>
      {children}
    </DemoContext_38.Provider>
  );
};


const useDemoContext_38 = () => {
  return useContext(DemoContext_38);
};

export { DemoProvider_38, useDemoContext_38 };
