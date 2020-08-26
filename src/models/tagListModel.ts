const localStrageKeyName = 'tagList';

type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated'; //联合类型
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    create(name) {
        if (this.data.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push(name);
        this.save();
        return 'success';
    },
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(localStrageKeyName) || '[]'
        ) as string[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStrageKeyName, JSON.stringify(this.data));
    }
};
export default tagListModel 