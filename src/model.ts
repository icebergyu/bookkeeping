const localStrageKeyName = 'recordList';
const model = {
    clone(data: RecordItem | RecordItem[]) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(
            window.localStorage.getItem(localStrageKeyName) || '[]'
        ) as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStrageKeyName, JSON.stringify(data));
    }
};
export default model 