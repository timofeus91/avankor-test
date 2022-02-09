import './App.css';
import AllFilters from "../AllFilters/AllFilters";
import ButtonFilters from "../ButtonFilters/ButtonFilters";
import GridTable from "../GridTable/GridTable";
import {useEffect, useState} from "react";
import list from '../../utils/list.json';
import AddItem from "../AddItem/AddItem";

const App = () => {

        const [basic, setBasic] = useState(list);
        const [stateVisibleText, setStateVisibleText] = useState(basic);


        useEffect(() => {
            filterVisible('description');

        }, [basic]);


        const sortArray = (a, b) => {
            const aLittle = a.visibleText.toLowerCase();
            const bLittle = b.visibleText.toLowerCase();
            if (aLittle < bLittle) {
                return -1;
            }
            if (aLittle > bLittle) {
                return 1;
            }
            return 0;
        };


        const filterVisible = (keyObject) => {

            const textForFindIndex = 'Итоговые значения';
            const mapBeforeFilter = basic.map(obj => {
                    let data = {entryPointDocument: obj.entryPointDocument};
                    if (obj[keyObject]) {
                        data = {...data, ['visibleText']: obj[keyObject]};
                    }

                    return data;
                }
            )


            const visibleArray = mapBeforeFilter.filter(item => item.visibleText);

            const sortData = visibleArray.sort(sortArray);

            const findTextForFindIndex = sortData.find(item => item.visibleText === textForFindIndex);

            console.log(findTextForFindIndex)
            if (findTextForFindIndex) {

                const findIndexObj = sortData.findIndex(item => item.visibleText === textForFindIndex);
                const ObjAfterFind = sortData[findIndexObj];

                const finalData = [ObjAfterFind, ...sortData.slice(0, findIndexObj), ...sortData.slice(findIndexObj + 1)];
                console.log(finalData);
                setStateVisibleText(finalData);
            } else {

                setStateVisibleText(sortData);
            }


        };

        const getRandomArbitrary = (min, max) => {
            return Math.random() * (max - min) + min;
        };

        const addNewItem = (text) => {
            return {
                description: text,
                entryPointDocument: getRandomArbitrary(10, 100),
            };
        };

        const addNewItemInState = (text) => {
            const newItem = addNewItem(text);
            setBasic([...basic, newItem]);

        };


        return (
            <main className="page">
                <AllFilters/>
                <ButtonFilters
                    filterVisible={filterVisible}
                />
                <GridTable list={stateVisibleText}/>
                <AddItem
                    addNewItemInState={addNewItemInState}
                />
            </main>
        );
    }
;

export default App;
