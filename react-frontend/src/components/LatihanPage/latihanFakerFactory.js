
import { faker } from "@faker-js/faker";
export default (user,count,kategoriIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
nomborRujukan: faker.datatype.number(""),
tajuk: faker.datatype.number(""),
kategori: kategoriIds[i % kategoriIds.length],
status: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
