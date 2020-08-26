import createdId from '@/lib/idCreator';

const localStrageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; //联合类型
    save: () => void;
    update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
    remove: (id: string) => boolean;
}
const tagListModel: TagListModel = {
    data: [],
    create(name) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) { return 'duplicated'; }
        const id = createdId().toString();
        this.data.push({ id: id, name: name });
        this.save();
        return 'success';
    },
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(localStrageKeyName) || '[]'
        ) as Tag[];
        return this.data;
    },
    update(id, name) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const tag = this.data.filter(t => t.id === id)[0];
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    save() {
        window.localStorage.setItem(localStrageKeyName, JSON.stringify(this.data));
    },
    remove(id) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
};
export default tagListModel 