/* eslint-env jest */

const request = require('request');
// const cheerio = require('cheerio')

// const lib = require('../../lib/file-helper')

const configPaths = require('../../config/paths.json');

const PORT = configPaths.ports.test;

const requestParamsHomepage = {
  url: `http://localhost:${PORT}/`,
  headers: {
    'Content-Type': 'text/plain',
  },
};
/*
const requestParamsExampleAllComponents = {
  url: `http://localhost:${PORT}/examples/all-components`,
  headers: {
    'Content-Type': 'text/plain'
  }
}

const requestParamsExampleFormAlignment = {
  url: `http://localhost:${PORT}/examples/form-alignment`,
  headers: {
    'Content-Type': 'text/plain'
  }
}

const requestParamsExampleFormElements = {
  url: `http://localhost:${PORT}/examples/form-elements`,
  headers: {
    'Content-Type': 'text/plain'
  }
}

const requestParamsExampleGrid = {
  url: `http://localhost:${PORT}/examples/grid`,
  headers: {
    'Content-Type': 'text/plain'
  }
}

const requestParamsExampleLinks = {
  url: `http://localhost:${PORT}/examples/links`,
  headers: {
    'Content-Type': 'text/plain'
  }
}

const requestParamsExampleProseScope = {
  url: `http://localhost:${PORT}/examples/prose-scope`,
  headers: {
    'Content-Type': 'text/plain'
  }
}

const requestParamsExampleTypography = {
  url: `http://localhost:${PORT}/examples/typography`,
  headers: {
    'Content-Type': 'text/plain'
  }
} */

describe('frontend app', () => {
  describe('homepage', () => {
    it('should resolve with a http status code of 200', (done) => {
      request.get(requestParamsHomepage, (err, res) => {
        expect(res.statusCode).toEqual(200);
        done(err);
      });
    });

    it('should resolve with a ‘Content-Type’ header of "text/html"', (done) => {
      request.get(requestParamsHomepage, (err, res) => {
        expect(res.headers['content-type']).toContain('text/html');
        done(err);
      });
    });
    /*
    it('should display the list of components', done => {
      request.get(requestParamsHomepage, (err, res) => {
        let $ = cheerio.load(res.body)
        let componentsList = $('li a[href^="/components/"]').get()
        expect(componentsList.length).toEqual(lib.allComponents.length)
        done(err)
      })
    }) */
  });

/*
  describe('all components examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleAllComponents, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  })

  describe('form alignment examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleFormAlignment, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  })

  describe('form elements examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleFormElements, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  })

  describe('grid examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleGrid, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  })

  describe('links examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleLinks, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  })

  describe('prose scope examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleProseScope, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  })

  describe('typography examples', () => {
    it('should resolve with a http status code of 200', done => {
      request.get(requestParamsExampleTypography, (err, res) => {
        expect(res.statusCode).toEqual(200)
        done(err)
      })
    })
  }) */
});
