abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}


/////exercicio 2

abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    private readonly maxQuantity: number = 10;

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            if (this.inventory[item] + quantity <= this.maxQuantity) {
                this.inventory[item] += quantity;
            } else {
                console.log(`Cannot add more than ${this.maxQuantity} of ${item}`);
            }
        } else {
            if (quantity <= this.maxQuantity) {
                this.inventory[item] = quantity;
            } else {
                console.log(`Cannot add more than ${this.maxQuantity} of ${item}`);
            }
        }
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

//////exercicio 3

abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();

    addFavorite(item: string): void {
        this.favorites.add(item);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        this.favorites.unshift(item);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

/////exercicio 4

abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        const sortedCandidates = Object.entries(this.votes).sort((a, b) => b[1] - a[1]);
        return Object.fromEntries(sortedCandidates);
    }
}