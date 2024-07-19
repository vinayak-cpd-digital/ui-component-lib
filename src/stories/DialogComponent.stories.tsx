// //import React from 'react';
// import { StoryFn, Meta } from '@storybook/react';
// import DialogComponent from '../../../components/DailogComponent';

// export default {
//   title: '',
//   component: DialogComponent,
// } as Meta;

// const Template: StoryFn = (args) => <DialogComponent {...args} />;

// export const Default = Template.bind({});
// Default.args = {};

import React , { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import DialogComponent from '../../../components/DailogComponent';
import { Button, Box } from '@mui/material';

type DialogProps =  {
    title: string;
    body: () => React.ReactNode;
    actions: () => React.ReactNode;
    open: boolean;
    onClose: () => void;
  }

const meta: Meta<DialogProps> = {
  title: '',
  component: DialogComponent
//   argTypes:{
//     title:{
//         table:{ disable: true}
//     },
//     body:{
//         table:{ disable: true}
//     },
//     actions:{
//         table:{ disable: true}
//     },
//     open:{
//         control: {
//             type: 'boolean'
//         }
//     },
//     onClose:{
//         table:{ disable: true}
//     }
//   }
} 

export const DialogStory: StoryObj<DialogProps> = {
    render:() => {
        const [isOpen, setIsOpen] = useState(false)
        return(
            <Box>
             <Button variant="outlined" onClick={()=> setIsOpen(true)}>Open Dialog</Button>
             <DialogComponent 
                 title='Dialog Box'
                 body= {() => (
                   <p>
                     Dialog Body content
                   </p>
                 )}
                 actions={
                    () => (
                     <>
                        <Button variant="contained" onClick={() => setIsOpen(false)} color="primary">
                        Close
                        </Button>
                     </>
                    )
                 }
                 open= {isOpen}
                 onClose= {() => setIsOpen(false)}
             />
            </Box> 
         )
    }
}
export default meta