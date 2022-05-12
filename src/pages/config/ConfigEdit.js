import * as React from "react";
import {Edit, required, SimpleForm, TextInput} from 'react-admin';
import {Box} from '@material-ui/core';

export const EditConfig = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <Box p="1em">
                <Box display="flex">
                    <Box flex={2} mr="1em">
                        <Box display="flex">
                            <Box flex={1} mr="0.5em">
                                <TextInput source="title" validate={required()} fullWidth name='title'/>
                            </Box>
                        </Box>
                        <Box mt="1em"/>
                        <TextInput
                            name='body'
                            fullWidth
                            multiline={true}
                            minRows={10}
                            component='pre'
                            source="body"
                            // format={(s, d)=> JSON.stringify(s, undefined, 2)}
                            validate={required()}
                        />
                    </Box>

                    <Box flex={1} ml="1em">
                        <TextInput source="project_id" name='project_id' validate={required()} fullWidth/>
                    </Box>
                </Box>
            </Box>
        </SimpleForm>
    </Edit>
);