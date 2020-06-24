import { useMutation } from '@apollo/react-hooks';

function useAuthMutation(query, options) {
  function updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  };
};

export default useAuthMutation;