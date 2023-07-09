import { hover } from '@testing-library/user-event/dist/hover'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

export const ImageCard = (props) => {
  return (
    <React.Fragment>
         <Card
                    className='card'
                    hoverable
                    style={{
                    width: 240,
                    margin:'20px auto',
                   
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    
                    }}
                    cover={<img alt={props.title} src={props.poster} />}
                >
                    <Meta title={props.title} description={props.imdb}/>
                </Card>
    </React.Fragment>
  )
}

//  default ImageCard