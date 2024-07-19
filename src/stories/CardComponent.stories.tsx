import { Meta, StoryObj } from '@storybook/react'
//import CardComponent from '../../../../packages/components/CardComponent'
import CardComponent from '../../../components/CardComponent'
import { Box } from '@mui/material' 
import landscape from './assets/Landscape.jpg'

type CardProps = {
    title: string;
    content: string;
    imageUrl?: string | undefined;
}

const meta: Meta<CardProps> = {
    title:"",
    component:CardComponent,
    argTypes:{
        title:{
            table:{ disable: true}
        },
        content:{
            table:{ disable: true}
        },
        imageUrl:{
            table:{ disable: true}
        }
    },
    args:{
        title:"Beautiful Landscape" ,
        content:"This is a beautiful landscape photo.",
        imageUrl:""
    }
}

export const CardStory: StoryObj<CardProps> = {
    render:(args: CardProps) => {
        return(
           <Box>
            <CardComponent 
                {...args}
                imageUrl={landscape} 
            />
           </Box>
            
        )
    }
}

export default meta