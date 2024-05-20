import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsAboutCard extends Schema.Component {
  collectionName: 'components_cards_about_cards';
  info: {
    displayName: 'About Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface CardsCards extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Value Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media;
  };
}

export interface CardsColorCards extends Schema.Component {
  collectionName: 'components_cards_color_cards';
  info: {
    displayName: 'Color Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    hexcode: Attribute.String;
    rgb: Attribute.String;
    rgba: Attribute.String;
    title_color: Attribute.String;
    background_color: Attribute.String;
    code_color: Attribute.String;
  };
}

export interface CardsIllustrationCards extends Schema.Component {
  collectionName: 'components_cards_illustration_cards';
  info: {
    displayName: 'Illustration Cards';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    image: Attribute.Media;
    width: Attribute.Integer;
    height: Attribute.Integer;
  };
}

export interface CardsLogoCard extends Schema.Component {
  collectionName: 'components_cards_logo_cards';
  info: {
    displayName: 'Logo Cards';
    description: '';
  };
  attributes: {
    background_color: Attribute.String;
    image: Attribute.Media;
  };
}

export interface CardsPersonaCards extends Schema.Component {
  collectionName: 'components_cards_persona_cards';
  info: {
    displayName: 'Persona Cards';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface CardsPhotographyCards extends Schema.Component {
  collectionName: 'components_cards_photography_cards';
  info: {
    displayName: 'Photography Cards';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    image: Attribute.Media;
    width: Attribute.Integer;
    height: Attribute.Integer;
  };
}

export interface CardsPositioningCards extends Schema.Component {
  collectionName: 'components_cards_positioning_cards';
  info: {
    displayName: 'Positioning Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CardsRuleCards extends Schema.Component {
  collectionName: 'components_cards_rule_cards';
  info: {
    displayName: 'Rule Cards';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface CardsTypographyCards extends Schema.Component {
  collectionName: 'components_cards_typography_cards';
  info: {
    displayName: 'Typography Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    font_family: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.about-card': CardsAboutCard;
      'cards.cards': CardsCards;
      'cards.color-cards': CardsColorCards;
      'cards.illustration-cards': CardsIllustrationCards;
      'cards.logo-card': CardsLogoCard;
      'cards.persona-cards': CardsPersonaCards;
      'cards.photography-cards': CardsPhotographyCards;
      'cards.positioning-cards': CardsPositioningCards;
      'cards.rule-cards': CardsRuleCards;
      'cards.typography-cards': CardsTypographyCards;
    }
  }
}
