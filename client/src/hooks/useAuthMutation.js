import { useMutation } from '@apollo/client';

function useAuthMutation(query, options) {
  function updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  };
};

export default useAuthMutation;