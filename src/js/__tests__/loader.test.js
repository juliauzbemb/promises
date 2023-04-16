import GameSavingLoader from "../loader.js";

test.each([
  [
    '{"id":2,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    {
      id: 2,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
      },
    },
  ],
  [
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,}}',
    "Ошибка чтения данных",
  ],
  [
    undefined,
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
      },
    },
  ],

])(
  ("Testing load method with param: %o"),
  async (param, expected) => {
    try {
      const savingData = await GameSavingLoader.load(param);
      expect(savingData).toEqual(expected);
    } catch (error) {
      expect(error.message).toContain(expected);
    }
  },
);
