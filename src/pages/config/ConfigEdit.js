import * as React from "react";

import {Edit, FormWithRedirect, required, SaveButton, TextInput} from 'react-admin';
import {Box, Toolbar} from '@material-ui/core';

export const EditConfig = (props) => (
    <Edit {...props}>
        <FormWithRedirect
            {...props}
            render={formProps => (
                // here starts the custom form layout
                <form>
                    <Box p="1em">
                        <Box display="flex">
                            <Box flex={2} mr="1em">
                                <Box display="flex">
                                    <Box flex={1} mr="0.5em">
                                        <TextInput source="title" validate={required()} fullWidth/>
                                    </Box>
                                </Box>
                                <Box mt="1em"/>
                                <TextInput
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
                                <TextInput source="project_id" validate={required()} fullWidth/>
                            </Box>
                        </Box>
                    </Box>
                    <Toolbar>
                        <Box display="flex" justifyContent="space-between" width="100%">
                            <SaveButton
                                saving={formProps.saving}
                                handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                            />
                        </Box>
                    </Toolbar>
                </form>
            )}
        />
    </Edit>
);