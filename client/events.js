import faker from 'faker';

faker.seed(123);

var events = [];
for(let i = 0; i < 50; i++){
  events.push({
    _id: faker.random.uuid,
    description: faker.company.catchPhraseAdjective(),
    type: faker.random.arrayElement(["Job Fair", "Interview Prep", "Networking Mixer", "Employer Meet and Great", "Alumni Dinner", "Educational Event"]),
    employerName: faker.company.companyName(),
    industry: faker.random.arrayElement(["Consulting", "Retail", "Supply Chain", "Management", "IT", "Technology", "Academia", "Finance", "Education", "Accounting"]),
    targetJobPosition: faker.name.jobTitle(),
    date: faker.date.future(),
    registrationStatus: faker.random.arrayElement(["Open", "Closed"]),
    registrants: faker.random.number({
        'min': 0,
        'max': 200
    }),
    city: faker.address.city(),
    state: faker.address.state(),
    hasCatering: faker.random.boolean(),
    hasReception: faker.random.boolean(),
    accountManager: faker.name.findName()
  });
  i++;
}

export default events;
