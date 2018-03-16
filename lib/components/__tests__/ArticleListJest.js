/*
import React from 'react';
import ArticleList from '../ArticleList';

// For Jest snapshot test
import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  
  // Pay attention to the props structure
  // articles has id, title etc. we are testing id only
  // articleActions is not part of articles as it is props function passed down from App
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
    articleActions: {
      // As we are only testing for ArticleList
      // We only care that lookupAuthor only return an object, doesn't matter what it is
      // jest.fn() is a mockup function and it return fake empty object
      lookupAuthor: jest.fn(() => ({})),
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    // Check what gets render using
    // console.log(tree);
    // it will show you ArticleList is a div with props and 2 childrens
    // Childrens are Article components, but ArticleList doesn't need to know the name of its children, it knows what's in it, how many are there etc.
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
*/