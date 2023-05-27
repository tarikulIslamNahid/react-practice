import React, {useEffect, useState} from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Table } from 'antd';


const Home = () => {
    const [state, setState] = useState(100)
    const [datas, setData] = useState([])
    useEffect(() => {
        
      
        return () => {
            async function getData() {
                let data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
                const res = await data.json();
                setData(res)
            }
            getData()
        }
      }, [state])
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 50,
        },
        {
          title: 'Name',
          dataIndex: 'firstName',
          width: 150,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          width: 150,
        },
        {
          title: 'Phone',
          dataIndex: 'contactNumber',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'DOB',
          dataIndex: 'dob',
        },
    ];
 
  return (
<Row gutter={16}>
    <Col span={8}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
          </Col>
          <Col span={8}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
          </Col>
          <Col span={24} style={{ marginTop: '20px' }} >
             
          <Table
    columns={columns}
    dataSource={datas}
    pagination={{
      pageSize: 10,
    }}
 
  />
          </Col>
  </Row>
  )
}

export default Home
