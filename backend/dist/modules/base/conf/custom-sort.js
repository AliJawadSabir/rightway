"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomSort {
    static sortByValue(a, b) {
        let valueA = a.value.toUpperCase();
        let valueB = b.value.toUpperCase();
        if (valueA < valueB) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }
        return 0;
    }
    static sortByName(a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }
    static sortByTitle(a, b) {
        let titleA = a.title.toUpperCase();
        let titleB = b.title.toUpperCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    }
}
exports.CustomSort = CustomSort;
//# sourceMappingURL=custom-sort.js.map