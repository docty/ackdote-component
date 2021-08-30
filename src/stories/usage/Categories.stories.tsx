import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story  } from '@storybook/react/types-6-0';
import {Flexbox} from '../../flexbox/Flexbox'
import { Column, Container, Image } from '../../index' 
import { style } from 'typestyle';
  
export default {
    title: 'Usage/Categories',
    component: Flexbox
} as Meta;

const Template: Story<any>  = (args) => 
    <Flexbox>
        <Column lg={'3'}>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/category1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
        <Column lg={'3'}>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/category1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
        <Column lg={'3'}>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/category1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
        <Column lg={'3'}>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/category1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
    </Flexbox>

    const fixStyle = style({
         
        background: '#fff',
        position: 'absolute',
        left: '1rem',
        right: '2rem',
        color: '#000',
        bottom: '1rem',
        borderRadius: '.25rem',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '35px',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background 0.5s'
    });

export const Item1 = Template.bind({});

 


const Template1: Story<any>  = (args) => 
    <Flexbox>
        <Column>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/product1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
        <Column>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/product1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
        <Column>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/product1.jpg"
                    />
                </a>
                <div className={fixStyle}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
        <Column>
            <Container radius position='relative'>
                <a href='#f'>
                    <Image
                        alt="Image not found"
                        source="http://localhost:6006/product1.jpg"
                    />
                </a>
                <div className={quickSearch}>
                    <a href="#sth">For men</a>
                </div>
            </Container>
        </Column>
    </Flexbox>

    const quickSearch = style({
        position: 'absolute', 
        background: '#002afdb0',
        color: '#fff',
        bottom: '0.3rem',
        right: '0.3rem',
        fontWeight: 'bold',
        left: '0.3rem',
        padding: '0.5rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        cursor: 'pointer'
    })
   

export const Item2 = Template1.bind({});