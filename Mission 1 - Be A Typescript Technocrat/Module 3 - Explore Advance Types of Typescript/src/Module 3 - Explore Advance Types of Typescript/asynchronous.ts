// Json place Holder

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1'");
    return await response.json();
}
const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
};

getTodoData();

// Mocking
// string
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched";
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetch data!");
        }
    });
};
const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}
// boolean
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetch data!");
        }
    });
};
const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

// object
// type alis
// type DataType={
//     name:string;
// }
interface DataType {
    name: string;
}
const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = {
            name: 'Md.Hamid Hosen'
        };
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetch data!");
        }
    });
};
const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}

// promise<string> promise<boolean> promise<object>