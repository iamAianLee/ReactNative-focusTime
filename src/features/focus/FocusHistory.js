import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const FocusHistory = ({ focusHistory, onClear }) => {
  const cleanHistory = () => {
    onClear();
  };

  const HistoryItem = ({ item, index }) => {
    return (
      <Text style={styles.historyItem(item.status)}>
        {item.subject}
      </Text>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>The things we've focused on:</Text>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.contentContainer}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={(item, index) => index.toString()}
            />

            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSizes: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSizes: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
