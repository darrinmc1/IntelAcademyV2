/**
 * This file provides image path utilities for the application
 */

export const forumCategoryImages = [
  "/forum-categories/general-discussion.png",
  "/forum-categories/intelligence-analysis.png",
  "/forum-categories/tools-techniques.png",
  "/forum-categories/case-studies.png",
  "/forum-categories/resources.png"
];

export function getCategoryImagePath(category: string): string {
  return `/categories/${category}.png`;
}

export function getTopicImagePath(topic: string): string {
  return `/topics/${topic}.png`;
}

export function getLearningPathImagePath(path: string): string {
  return `/learning-paths/${path}.png`;
}

export function getIntelligenceTypeImagePath(type: string): string {
  return `/intelligence-types/${type}.png`;
}