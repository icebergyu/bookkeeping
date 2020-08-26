type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    total: number;
    createdAt?: Date;
}
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
interface Window {
    store: {
        tagList: Tag[];
        createTag: (name: string) => void;
        removeTag: (id: string) => boolean;
        updateTag: TagListModel['update'];
        findTag: (id: string) => Tag | undefined;
        recordList: RecordItem[];
        createRecord: (record: RecordItem) => void;
    };

}