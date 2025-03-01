# cucumber-wdio

# WebdriverIO + Cucumber Test Automation for Saucedemo

## **Project Overview**
This project is an automated test using **WebdriverIO** and **Cucumber** to verify login error handling on the [Saucedemo](https://www.saucedemo.com/) website.

## **Test Scenario**
The test follows the Cucumber **Gherkin** syntax and ensures that an error message appears when a user attempts to log in without entering credentials.

```gherkin
Feature: Login functionality

  Scenario: Login attempt without entering credentials

    Given User is located on the main page of saucedemo website
    When User clicks the "Login" button
    Then User should see "Epic sadface: Username is required" error message

