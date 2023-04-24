import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ListaPostagens from '../listaPostagem/ListaPostagem';

function TabPostagens() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <TabList centered TabIndicatorProps={{ style: { display: "none" } }} onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Postagens" value="1" />
                    <Tab label="Sobre nós" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1"><ListaPostagens /></TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
    )
}

export default TabPostagens