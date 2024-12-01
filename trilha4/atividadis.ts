abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: string[] = [];

    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        if (!this.tasks.has(task)) {
            this.tasks.add(task);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}


//////atividade 2 

abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private items: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private items: Record<string, number> = {};
    private maxQuantity: number = 10;

    addItem(item: string, quantity: number): void {
        if (this.items[item] && this.items[item] + quantity > this.maxQuantity) {
            console.log("Limite de quantidade por item excedido");
            return;
        }

        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
        }
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}


/////atividade 3

abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(movie: string): void {
        if (!this.favorites.includes(movie)) {
            this.favorites.push(movie);
            this.favorites.sort();
        }
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(book: string): void {
        this.favorites.unshift(book);
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

////atividades 4

abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes;}
        }
    }
