import axios, { isAxiosError } from 'axios';
import { CreateChallenge } from './types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'x-init-data': process.env.MOCK_INIT_DATA,
  },
});

const testCreateChallenge = async (id: number) => {
  try {
    const newChallenge: CreateChallenge = {
      id: id,
      userId: 1,
      title: 'Test Challenge',
      duration: 30,
      color: '#FF0000',
      createdAt: new Date().toISOString(),
      regularity: 'everyday',
      daysOfWeek: null,
      taskDates: [],
      userCheckedDates: null,
    };

    const postResponse = await api.post('/createChallenge', newChallenge);

    console.log('New Challenge:', postResponse.data);
  } catch (e) {
    if (isAxiosError(e)) {
      console.error(e.message);
    }
  }
};

const testGetChallenges = async () => {
  try {
    const response = await api.get('/getChallenges');
    console.log('Got all challenges:', response.data);
  } catch (e) {
    if (isAxiosError(e)) {
      console.error(e.message);
    }
  }
};

const testUpdateChallenge = async (id: number) => {
  try {
    const updateResponse = await api.put(`/updateChallenge/${id}`, {
      title: 'Updated Test Challenge',
    });

    console.log('Updated Challenge:', updateResponse.data);
  } catch (e) {
    if (isAxiosError(e)) {
      console.error(e.message);
    }
  }
};

const test = async () => {
  const challengeId = 4;

  // 1. Create a challenge
  await testCreateChallenge(challengeId);

  // 2. Get all challenges
  // await testGetChallenges();

  // 3. Update the challenge
  await testUpdateChallenge(challengeId);

  // 4. Get all challenges again to see the update
  await testGetChallenges();
};

test();
