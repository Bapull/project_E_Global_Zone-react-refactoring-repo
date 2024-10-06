import axios from 'axios';

export function setInterceptors(instance, guard, isGoogle = false) {
  instance.interceptors.request.use(
    function (config) {
      // 헤더 - 토큰
      config.headers.Authorization = !isGoogle
        ? guard === 'foreigner'
          ? `Bearer ${window.localStorage.getItem('global-zone-foreigner-token')}`
          : `Bearer ${window.localStorage.getItem('global-zone-admin-token')}`
        : `${window.localStorage.getItem('global-zone-korean-token')}`;

      // 언어 설정
      if (!window.localStorage.getItem('global-zone-lang')) {
        window.localStorage.setItem('global-zone-lang', 'kor');
      }
      config.headers['Accept-Language'] = window.localStorage.getItem('global-zone-lang');

      // guard 값이 있으면 파라미터에 추가
      if (guard) {
        config.params = {
          guard,
          ...config.params,
        };
      }
      return config;
    },
    function (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      }
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      // 응답이 201일 경우 메시지 처리
      if (response.status === 201 && response.data.message) {
        alert(response.data.message);
      }
      return response;
    },
    function (error) {
      const { status } = error.response || {};
      const { message } = error.response?.data || {};

      switch (status) {
        case 401:
          alert(message);
          window.localStorage.clear();
          window.location.reload();
          break;
        default:
          if (message) alert(message);
          break;
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export function setLoginInterceptors(instance, provider) {
  instance.interceptors.request.use(
    function (config) {
      // provider 값이 있으면 파라미터에 추가
      if (provider) {
        config.params = {
          provider,
          ...config.params,
        };
      }
      return config;
    },
    function (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      }
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      if (response.data.message) {
        alert(response.data.message);
      }
      return response;
    },
    function (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export function setRestDateInterceptors(instance, serviceKey) {
  instance.interceptors.request.use(
    function (config) {
      // serviceKey 추가 및 헤더 설정
      if (serviceKey) {
        config.params = {
          serviceKey,
          _type: 'json',
          ...config.params,
        };
        config.headers['Access-Control-Allow-Origin'] = '*';
      }
      return config;
    },
    function (error) {
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      }
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(function (response) {
    // 응답 헤더 설정
    response.headers['Access-Control-Allow-Origin'] = '*';
    return response;
  });

  return instance;
}
