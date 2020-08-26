import clone from '@/lib/clone';

const localStrageKeyName = 'recordList';
const recordStore = {
    //record store
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(
            window.localStorage.getItem(localStrageKeyName) || '[]'
        ) as RecordItem[];
        return this.recordList;
    },
    saveRecords() {
        window.localStorage.setItem(localStrageKeyName, JSON.stringify(this.recordList));
    },

    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.recordList?.push(record2); //可选链语法
        recordStore.saveRecords();
    }
};

recordStore.fetchRecords();

export default recordStore;