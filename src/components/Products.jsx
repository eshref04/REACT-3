import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const Products = () => (
  <Card
    hoverable
    style={{
      width: 240,
     
     padding:10
    }}
    cover={<img  alt="example" src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png" />}
  >
    <Meta title="One-stop business  access" description="The efficiency of payment, settlement and accounting access products quadruples" />

    
  </Card>,


);
export default Products;
