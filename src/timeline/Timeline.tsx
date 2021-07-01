import React, {Children, HTMLAttributes, ReactNode } from 'react'
import './timeline.css';

export const Timeline = (props: ITimeline) => {
    
    if (props.type === 'left') {
        return <Left data = {props}/>
    }else if (props.type === 'mixed') {
        return null; 
    }else {
        return <Right data = {props}/>
    }
    
    
}

const Left = (props: any) => {
    const itemChild = Children.toArray(props.data.children)
    return (
            <div style={{justifyContent: 'flex-start'}} className={'dt-timeline'}>
                <div className={'dt-timeline-content'} style={props.data.style}>
                    {
                       itemChild.map((item:any) => 
                            <TimelineItem type={props.data.type}>{item.props.children}</TimelineItem>
                        ) 
                    }
                </div>
        </div> 
    )
}

const Right = (props: any) => {
    const itemChild = Children.toArray(props.data.children)
    return (
        <div style={{justifyContent: 'flex-end'}} className={'dt-timeline'}>
                <div className={'dt-timeline-right-content'} style={props.data.style}>
                    {
                       itemChild.map((item:any) => 
                            <TimelineItem type={props.data.type}>{item.props.children}</TimelineItem>
                        ) 
                    }
                </div>
        </div> 
    )
}    

export const TimelineItem = (props: ITimeline) => {
    let cssName = '';
    if (props.type === 'left') cssName = 'dt-timeline-child';
    else if(props.type === 'right') cssName = 'dt-timeline-right-child';
    else cssName = 'dt-timeline-middle-child';

    

    return (
        <div  className={cssName} style={props.style}>
            {props.children} 
        </div>
    );
}

export interface ITimeline extends ITimelineMain {
    type?: 'right' | 'left' | 'mixed'
}

interface ITimelineMain extends Pick<HTMLAttributes<ReactNode>, 'children' | 'style'>  {
    
}

Timeline.defaultProps = {
    type : 'left'
}